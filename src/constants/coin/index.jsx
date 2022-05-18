// export const coinPrice = 0.1;
export const coinSchedule = [
  {
    title: 'PRIVATE ICO SALE',
    start: 'Start at May 10 2022 00:00 AM (UTC +0)',
    end: 'End at June 10, 2022 23:59 am (UTC +0)',
    startDate: new Date('May 10, 2022 00:00:00'),
    endDate: new Date('June 11, 2022 00:00:00'),
    coinPrice: parseFloat(0.11).toFixed(2),
    tokenDistribute: '10.000.000',
  },
  {
    title: 'PRE ICO SALE',
    start: 'Start at June 10, 2022 00:00 AM (UTC +0)',
    end: 'End at July 10, 2022 11:59 PM (UTC +0)',
    startDate: new Date('June 10, 2022 00:00:00'),
    endDate: new Date('July 11, 2022 00:00:00'),
    coinPrice: parseFloat(0.2).toFixed(2),
    tokenDistribute: '20.000.000',
  },
  {
    title: 'PUBLIC ICO SALE',
    start: 'Start at July 10 2022 00:00 AM (UTC +0)',
    end: 'End at August 10 2022 11:59 PM (UTC +0)',
    startDate: new Date('July 10, 2022 00:00:00'),
    endDate: new Date('August 11, 2022 00:00:00'),
    coinPrice: parseFloat(0.25).toFixed(2),
    tokenDistribute: '30.000.000',
  },
];

export const getActiveSchedule = () => {
  const currentDate = new Date().getTime();
  const activeEvent = coinSchedule.find(
    event =>
      event.startDate.getTime() < currentDate &&
      event.endDate.getTime() > currentDate
  );
  return activeEvent || coinSchedule[0];
};
