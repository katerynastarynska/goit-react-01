import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);

// const statistics = <section class="statistics">
// <h2 class="title">Upload stats</h2>

// <ul class="stat-list">
//   <li class="item">
//     <span class="label">{data.label}</span>
//     <span class="percentage">{data.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">{data.label}</span>
//     <span class="percentage">{data.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">{data.label}</span>
//     <span class="percentage">{data.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">{data.label}</span>
//     <span class="percentage">{data.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">{data.label}</span>
//     <span class="percentage">{data.percentage}</span>
//   </li>
// </ul>
// </section>

// const profile = <div class="profile">
// <div class="description">
//   <img
//     src={user.avatar}
//     alt="User avatar"
//     class="avatar"
//     width="200"
//   />
//   <p class="name">{user.username}</p>
//   <p class="tag">{user.tag}</p>
//   <p class="location">{user.location}</p>
// </div>

// <ul class="stats">
//   <li>
//     <span class="label">Followers</span>
//     <span class="quantity">{user.stats.followers}</span>
//   </li>
//   <li>
//     <span class="label">Views</span>
//     <span class="quantity">{user.stats.views}</span>
//   </li>
//   <li>
//     <span class="label">Likes</span>
//     <span class="quantity">{user.stats.likes}</span>
//   </li>
// </ul>
// </div>

// console.log(profile);
// let friend = friends[0]

//  friend = <li class="item">
// <span class="status"></span>
// <img class="avatar" src={friend.avatar}  alt="User avatar" width="48" />
// <p class="name">{friend.name}</p>
// </li>
// let transaction = transactions[0]

//  transaction = <table class="transaction-history">
// <thead>
//   <tr>
//     <th>Type</th>
//     <th>Amount</th>
//     <th>Currency</th>
//   </tr>
// </thead>

// <tbody>
//   <tr>
//     <td>{transaction.type}</td>
//     <td>{transaction.amount}</td>
//     <td>{transaction.currency}</td>
//   </tr>
//   <tr>
//     <td>{transaction.type}</td>
//     <td>{transaction.amount}</td>
//     <td>{transaction.currency}</td>
//   </tr>

// </tbody>
// </table>

// ReactDOM.createRoot(document.getElementById('root')).render(transaction)

