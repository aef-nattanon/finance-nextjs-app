export default function MyBalance({ balance = 0 }) {
  let className = balance >= 0 ? "--plus" : "--minus";
  return (
    <>
      <section class={`you-balance you-balance${className}`}>
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
      </section >
    </>
  )
}