/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"

export default function SignIn() {

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
        <div class="authen-content">
          <header class="app-name">
            <i class="app-name-icon material-symbols-outlined">
              account_balance_wallet
            </i>
            <label class="app-name-label">Income & Expenses</label>
          </header>
          <form>
            <section class="authen-input">
              <div class="input-group">
                <label>Username</label>
                <input type="text" />
              </div>
              <div class="input-group">
                <label>Password</label>
                <input type="password" />
              </div>
            </section>
            <section class="authen-action">
              <button class="btn btn--primary">Sign In</button>
              <a class="link" href="">Create a new account</a>
            </section>
          </form>
        </div>
      </div>
    </>
  )
}