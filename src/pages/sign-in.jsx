
import AppHerder from "@/components/AppHerder"
import UserForm from "@/components/UserForm"

import Link from 'next/link'
export default function SignIn() {

  return (
    <>
      <AppHerder title="Sign In" />
      <div class="app-content">
        <div class="authen-content">
          <header class="app-name">
            <i class="app-name-icon material-symbols-outlined">
              account_balance_wallet
            </i>
            <label class="app-name-label">Income & Expenses</label>
          </header>
        </div>
        <UserForm textBtSubmit='Sign In' >
          <Link class="link" href="/sign-up">Create a new account</Link>
        </UserForm>
      </div>
    </>
  )
}