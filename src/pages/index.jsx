import AppHerder from "@/components/AppHerder"
import BalanceCard from "@/components/BalanceCard"
import MyBalance from "@/components/MyBalance"
import NewTransitionModal from "@/components/NewTransitionModal"
import TransitionRow from "@/components/TransitionRow"

export default function Home() {
  return (
    <>
      <AppHerder title="Home" />
      <div class="app-content">
        <header class="dashboard-header">
          <div class="user-sign-in">
            <label class="welcome-user">Welcome Username</label>
            <label class="date-time">09 Mar 2023 09:00</label>
          </div>
          <div class="logout">
            <i class="material-symbols-outlined">
              logout
            </i>
            <label>Logout</label>
          </div>
        </header>
        <div class="dashboard-content">
          <MyBalance balance="" />
          <section class="income-expenses">
            <BalanceCard type="income" amount={500000} />
            <BalanceCard type="expend" amount={500000} />
          </section>
          <section class="history-transaction">
            <div class="history-head">
              <label class="history-head-title">
                History Transaction
              </label>
              <div class="history-head-action">
                <NewTransitionModal />
              </div>
            </div>
            <div class="history-content">
              <TransitionRow type="income" amount='5,000.00' created_at="2023-03-08T11:48:44.490595Z" />
              <TransitionRow type="expend" amount='5,000.00' created_at="2023-03-08T11:48:44.490595Z" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
