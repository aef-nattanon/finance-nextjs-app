export default function BalanceCard({ type = '', amount = 0 }) {
  let className, icon = ''
  switch (type) {
    case "income":
      className = "--income"
      icon = "download"
      break;
    case "expend":
      className = "--expenses"
      icon = "upload"
      break;
    default:
      return null
  }
  return (
    <>
      <div class={`balance-card balance-card${className}`}>
        <div class="balance-card-title">
          <div class="balance-card-title--icon">
            <i class="material-symbols-outlined">
              {icon}
            </i>
          </div>
          <label class="balance-card-title-label">
            Income
          </label>
        </div>
        <div class="amount">
          <div class="amount-number">
            + {amount.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
          </div>
          <div class="amount-unit">
            THB
          </div>
        </div>
      </div>
    </>
  )
}