import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';

export default function DatePOne() {
  // "Today"
  const [selectedStartDate, handleStartDateChange] = useState(new Date());

  return (
    <DatePicker
      disableFuture
      openTo="month"
      format="MM/yyyy"
      label="Select month"
      views={['year', 'month']}
      value={selectedStartDate}
      onChange={handleStartDateChange}
    />
  );
}
