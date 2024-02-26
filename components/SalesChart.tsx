"use client";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = () => {
  const [countriesData, setCountriesData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/news/getAllNews");
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      const data = await response.json();
      setCountriesData(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("countries : ");

  // countriesData.map((countries) => {
  //   countries?.map((country) => {
  //     console.log(country.participant);
  //   });
  // });

  const chartoptions = {
    series: [
      {
        name: "Participant Count",
        data: countriesData.map((countries) => {
          return countries.participants_count;
        }),
      },
      {
        name: "Replies Count",
        data: countriesData.map((countries) => {
          return countries.replies_count;
        }),
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.9)",
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "April", "May", "June"],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6"></CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
