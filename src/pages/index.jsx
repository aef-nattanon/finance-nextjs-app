/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>dashboard</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0"
          rel="stylesheet"
        />
      </Head>
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
          <section class="you-balance">
            <div class="you-balance--icon">
              <i class="material-symbols-outlined">
                account_balance_wallet
              </i>
            </div>
            <div class="you-balance-text">
              <label class="you-balance-text-title">
                Your Balance
              </label>
              <div class="amount">
                <div class="amount-number">
                  + 50,000.00
                </div>
                <div class="amount-unit">
                  THB
                </div>
              </div>
            </div>
          </section>
          <section class="income-expenses">

            <div class="balance-card balance-card--income">
              <div class="balance-card-title">
                <div class="balance-card-title--icon">
                  <i class="material-symbols-outlined">
                    download
                  </i>
                </div>
                <label class="balance-card-title-label">
                  Income
                </label>
              </div>
              <div class="amount">
                <div class="amount-number">
                  + 50,000.00
                </div>
                <div class="amount-unit">
                  THB
                </div>
              </div>
            </div>

            <div class="balance-card balance-card--expenses">
              <div class="balance-card-title">
                <div class="balance-card-title--icon">
                  <i class="material-symbols-outlined">
                    upload
                  </i>
                </div>
                <label class="balance-card-title-label">
                  Expenses
                </label>
              </div>
              <div class="amount">
                <div class="amount-number">
                  + 50,000.00
                </div>
                <div class="amount-unit">
                  THB
                </div>
              </div>
            </div>

          </section>
          <section class="history-transaction">
            <div class="history-head">
              <label class="history-head-title">
                History Transaction
              </label>
              <div class="history-head-action">
                <button class="btn">New Transaction</button>
              </div>
            </div>
            <div class="history-content">
              <div class="transaction-list transaction-lis--income">
                <div class="transaction-list-icon">
                  <i class="material-symbols-outlined">
                    download
                  </i>
                </div>
                <div class="transaction-list-detail">
                  <label class="transaction-name">Transaction Name</label>
                  <label class="transaction-datetime">09 Mar 2023 09:00</label>
                </div>
                <div class="transaction-list-amount">
                  + 999,999,9.00
                </div>
                <div class="transaction-list-action">
                  <button class="btn">
                    <i class="material-symbols-outlined">
                      delete
                    </i>
                  </button>
                </div>
              </div>
              <div class="transaction-list transaction-lis--expenses">
                <div class="transaction-list-icon">
                  <i class="material-symbols-outlined">
                    upload
                  </i>
                </div>
                <div class="transaction-list-detail">
                  <label class="transaction-name">Transaction Name</label>
                  <label class="transaction-datetime">09 Mar 2023 09:00</label>
                </div>
                <div class="transaction-list-amount">
                  + 999,999,9.00
                </div>
                <div class="transaction-list-action">
                  <button class="btn">
                    <i class="material-symbols-outlined">
                      delete
                    </i>
                  </button>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  )
}
