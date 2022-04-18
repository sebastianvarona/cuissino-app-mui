import React from 'react';
import CardChart from '../components/CardChart';
import CardTwo from '../components/CardTwo';
import AnalyticsOrdersChart from '../components/charts/AnalyticsOrdersChart';
import LineChartC from '../components/charts/LineChartC';
import RangeDropdown from '../components/RangeDropdown';

export default function Home() {
  // ORDERS DATA
  const ordersData = [
    {
      name: 'Monday',
      orders: 70,
    },
    {
      name: 'Tuesday',
      orders: 120,
    },
    {
      name: 'Wednesday',
      orders: 60,
    },
    {
      name: 'Thursday',
      orders: 180,
    },
    {
      name: 'Friday',
      orders: 350,
    },
    {
      name: 'Saturday',
      orders: 300,
    },
    {
      name: 'Sunday',
      orders: 200,
    },
  ];
  let orders = 0;
  let ordersRevenue = 12000;
  let costs = 1200;
  let profit = ordersRevenue - costs;
  for (let i = 0; i < ordersData.length; i++) {
    const r = ordersData[i];
    orders += r.orders;
  }

  // REVENUE DATA
  const revenueData = [
    {
      name: 'Page A',
      revenue: 2400,
    },
    {
      name: 'Page B',
      revenue: 1398,
    },
    {
      name: 'Page C',
      revenue: 9800,
    },
    {
      name: 'Page D',
      revenue: 3908,
    },
    {
      name: 'Page E',
      revenue: 4800,
    },
    {
      name: 'Page F',
      revenue: 3800,
    },
    {
      name: 'Page G',
      revenue: 4300,
    },
  ];
  const costsData = [
    {
      name: 'Page A',
      costs: 4000,
    },
    {
      name: 'Page B',
      costs: 3000,
    },
    {
      name: 'Page C',
      costs: 2000,
    },
    {
      name: 'Page D',
      costs: 2780,
    },
    {
      name: 'Page E',
      costs: 1890,
    },
    {
      name: 'Page F',
      costs: 2390,
    },
    {
      name: 'Page G',
      costs: 3490,
    },
  ];
  let summary = [];
  let revenue = 0;
  for (let i = 0; i < revenueData.length; i++) {
    const c = costsData[i];
    const r = revenueData[i];
    revenue += r.revenue;
    let obj = {
      name: r.name,
      Costs: c.costs,
      Revenue: r.revenue,
    };
    summary.push(obj);
  }

  // BEST SELLING MENUS DATA
  const bestSellingItems = [
    { name: 'Shining Star', price: 2100, orders: 400 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
    { name: 'The Sliding', price: 1961, orders: 134 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
    { name: 'Shining Star', price: 2100, orders: 400 },
    { name: 'Lockyer', price: 10500, orders: 200 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'The Sliding', price: 1961, orders: 134 },
    { name: 'Lockyer', price: 10500, orders: 200 },
  ];
  const bsItems = bestSellingItems.map((e, index) => {
    return (
      <tr key={index + 1}>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          {index + 1}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          {e.name}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          $ {e.price}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          {e.orders}
        </td>
      </tr>
    );
  });

  // BEST SELLING PRODUCTS DATA
  const bestSellingProducts = [
    { name: 'Lockyer', price: 10500, orders: 200 },
    { name: 'Shining Star', price: 2100, orders: 400 },
    { name: 'The Sliding', price: 1961, orders: 134 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'Shining Star', price: 2100, orders: 400 },
    { name: 'The Sliding Mr. Bones', price: 1961, orders: 134 },
    { name: 'Lockyer', price: 10500, orders: 200 },
    { name: 'The Sliding', price: 1961, orders: 134 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
    { name: 'Malcolm Lockyer', price: 10500, orders: 200 },
  ];
  const bsProducts = bestSellingProducts.map((e, index) => {
    return (
      <tr key={index + 1}>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          {index + 1}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          {e.name}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          $ {e.price}
        </td>
        <td className="border-t border-gray-100 dark:border-gray-800 py-2">
          {e.orders}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className={`flex justify-between items-center`}>
        <h1 className="text-4xl font-bold mb-8">Analytics</h1>
        <RangeDropdown calendar={true} />
      </div>
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-5">
          <CardChart title="Orders">
            <AnalyticsOrdersChart data={ordersData} />
          </CardChart>
        </div>
        <div className="col-span-2 flex items-stretch">
          <CardTwo title="Profit Detail">
            <p className={`text-lg font-medium text-blue-500`}>
              Total orders: {orders}
            </p>
            <div className="h-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <ul className={`w-full`}>
              <li className={`text-lg font-medium`}>
                <span className="font-medium text-2xl mr-2 text-green-500">
                  +
                </span>{' '}
                Total revenue: {ordersRevenue}
              </li>
              <li className={`text-lg font-medium`}>
                <span className="font-medium text-2xl mr-2 text-red-500">
                  -
                </span>{' '}
                Total costs: {costs}
              </li>
            </ul>
            <div className="h-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <p
              className={`text-lg font-medium ${
                profit <= 0 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              Total profit: {profit}
            </p>
          </CardTwo>
        </div>
      </div>
      <CardChart title="Revenue vs. Costs">
        <LineChartC data={summary} />
      </CardChart>
      <div className={`grid grid-cols-2 gap-6`}>
        <CardTwo title="Best Seller Menus">
          <table className="table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  #
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  Name
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  Price
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  Orders
                </th>
              </tr>
            </thead>
            <tbody>{bsItems}</tbody>
          </table>
        </CardTwo>
        <CardTwo title="Best Seller Products">
          <table className="table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  #
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  Name
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  Price
                </th>
                <th className="border-b border-gray-300 dark:border-gray-700 pb-3 text-left">
                  Orders
                </th>
              </tr>
            </thead>
            <tbody>{bsProducts}</tbody>
          </table>
        </CardTwo>
      </div>
    </div>
  );
}
