/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback, useState } from "react"
import { message, List, Divider, Skeleton } from "antd"
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios"
import AppHerder from "@/components/AppHerder"
import BalanceCard from "@/components/BalanceCard"
import MyBalance from "@/components/MyBalance"
import NewTransitionModal from "@/components/NewTransitionModal"
import TransitionRow from "@/components/TransitionRow"
export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const error = (e) => {
    const content = e?.response?.data?.error || 'This is an error message'
    messageApi.open({
      type: 'error',
      content: content,
    });
  };
  ////////////////////////////////
  const [balances, setBalances] = useState({})
  const handleGetBalances = useCallback(() => {
    axios.get(`${process.env.API_URL}/dashboards/balances`)
      .then(function (response) {
        setBalances(response.data)
      })
      .catch(function (e) {
        setBalances({})
        error()
      })
  }, [])
  ////////////////////////////////
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(null)
  const [transactions, setTransactions] = useState([]);
  const [transactionsLoading, setTransactionsLoading] = useState(false);

  const handleGetTransactions = (pageNumber = 0) => {
    if (transactionsLoading) {
      return;
    }
    setTransactionsLoading(true);
    // 
    const pageParm = pageNumber + 1
    setPage(pageParm)
    axios.get(`${process.env.API_URL}/transactions?limit=5&page=${pageParm}`)
      .then(function (response) {
        setTransactions(transactions.concat(response.data["transactions"]));
        setTransactionsLoading(false);
        setTotalPage(response.data["total_page"])
      })
      .catch(function (e) {
        error(e)
        setTransactionsLoading(false);
      })
  }
  ////////////////////////////////
  const handleDeleteTransition = (id) => {
    axios.delete(`${process.env.API_URL}/transactions/${id}`)
      .then(function (response) {
        success()
        handleReCallData()
      })
      .catch(function (e) {
        error(e)
      })
  }

  const handleReCallData = useCallback(() => {
    setTransactions([])
    setTotalPage(null)
    setPage(0)
    handleGetBalances()
    handleGetTransactions(page)
  }, [])
  ////////////////////////////////
  const [createLoading, setCreateLoading] = useState(false)
  const handleCreateTransaction = (values) => {
    setCreateLoading(true)
    return axios.post(`${process.env.API_URL}/transactions`, values)
      .then(function (response) {
        setCreateLoading(false)
        success()
        handleReCallData()
        return true
      })
      .catch(function (e) {
        setCreateLoading(false)
        error(e)
        return false
      })
  }
  ////////////////////////////////
  useEffect(() => {
    handleReCallData()
  }, [])

  return (
    <>
      {contextHolder}
      <AppHerder title="Home" />
      <div className="app-content">
        <header className="dashboard-header">
          <div className="user-sign-in">
            <label className="welcome-user">Welcome Username</label>
            <label className="date-time">09 Mar 2023 09:00</label>
          </div>
          <div className="logout">
            <i className="material-symbols-outlined">
              logout
            </i>
            <label>Logout</label>
          </div>
        </header>
        <div className="dashboard-content">
          <MyBalance balance={balances.balance} />
          <section className="income-expenses">
            <BalanceCard type="income" amount={balances.total_income} />
            <BalanceCard type="expend" amount={balances.total_expend} />
          </section>
          <section className="history-transaction">
            <div className="history-head">
              <label className="history-head-title">
                History Transaction
              </label>
              <div className="history-head-action">
                <NewTransitionModal loading={createLoading} onFinish={handleCreateTransaction} />
              </div>
            </div>
            <InfiniteScroll
              dataLength={transactions.length}
              next={() => handleGetTransactions(page)}
              hasMore={totalPage > page}
              loader={
                <Skeleton
                  avatar
                  paragraph={{
                    rows: 1,
                  }}
                  active
                />
              }
              endMessage={transactions.length === 0 ? null : <Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <div className="history-content">
                <List
                  dataSource={transactions}
                  renderItem={(item) => (
                    <TransitionRow
                      deleteTransition={handleDeleteTransition}
                      id={item.id}
                      key={item.id}
                      title={item.title}
                      type={item.type}
                      amount={item.amount}
                      created_at={item.created_at}
                    />
                  )}
                />
              </div>
            </InfiniteScroll>
          </section>
        </div>
      </div >
    </>
  )
}
