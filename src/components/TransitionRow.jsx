import moment from 'moment';

export default function TransitionRow({ type = '', title = '', amount = 0, created_at = '2023-03-08T11:48:44.490595Z' }) {
  const createdAt = moment(created_at)
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
      <div class={`transaction-list transaction-lis${className}`}>
        <div class="transaction-list-icon">
          <i class="material-symbols-outlined">
            {icon}
          </i>
        </div>
        <div class="transaction-list-detail">
          <label class="transaction-name">Transaction Name</label>
          <label class="transaction-datetime">09 Mar 2023 09:00</label>
          {createdAt.format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <div class="transaction-list-amount">
          + {amount}
        </div>
        <div class="transaction-list-action">
          <button class="btn">
            <i class="material-symbols-outlined">
              delete
            </i>
          </button>
        </div>
      </div>
    </>
  );
}