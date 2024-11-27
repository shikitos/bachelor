import { ChangeEvent } from 'react';

import { useDashboardContext } from '../providers';
import { getRandomColor } from './getRandomColor';

export const useDashboard = () => {
  const { chartData, setChartData, chartOptions, setChartOptions } =
    useDashboardContext();

  const onDatasetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const datasetIndex = Number(e.target.closest('ul')?.dataset.index);
    setChartData((prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset, index) => {
        if (index === datasetIndex) {
          return {
            ...dataset,
            [inputName]: inputValue,
          };
        }
        return dataset;
      }),
    }));
  };

  const onDatasetDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const datasetIndex = Number(e.target.closest('ul')?.dataset.index);
    const dataIndex = Number(e.target.dataset.index);
    const value = Number(e.target.value);
    setChartData((prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset, index) => {
        if (index !== datasetIndex) return dataset;
        return {
          ...dataset,
          data: dataset.data.map((data, index) => {
            if (index === dataIndex) return value;
            return data;
          }),
        };
      }),
    }));
  };

  const onDatasetDataAdd = () => {
    setChartData((prevData) => ({
      labels: [...prevData.labels!, ''],
      datasets: prevData.datasets.map((dataset) => ({
        ...dataset,
        data: [...dataset.data, 0],
      })),
    }));
  };

  const onLabelsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const labelIndex = Number(e.target.dataset.index);
    const value = e.target.value;
    setChartData((prevData) => ({
      ...prevData,
      labels: prevData.labels!.map((label, index) => {
        if (index === labelIndex) return value;
        return label;
      }),
    }));
  };

  const onDatasetAdd = () => {
    setChartData((prev) => ({
      labels: prev.labels,
      datasets: [
        ...prev.datasets,
        {
          label: `New dataset ${prev.datasets.length + 1}`,
          data: Array(prev.labels!.length).fill(0),
          borderColor: getRandomColor(),
          backgroundColor: getRandomColor(),
        },
      ],
    }));
  };

  return {
    chartData,
    chartOptions,
    setChartData,
    setChartOptions,
    onDatasetChange,
    onDatasetDataChange,
    onDatasetDataAdd,
    onLabelsChange,
    onDatasetAdd,
  };
};
