
import AppHerder from "@/components/AppHerder"
import UserForm from "@/components/UserForm"
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <AppHerder title="Sign Up" />
      <div class="app-content">
        <div class="authen-content">
          <header class="app-name">
            <i class="app-name-icon material-symbols-outlined">
              account_box
            </i>
            <label class="app-name-label">Create a new account</label>
          </header>
          <UserForm textBtSubmit='Sign Up' >
            <Link className="link" href="/sign-in">Back to login page</Link>
          </UserForm>
        </div>
      </div>
    </>
  )
}