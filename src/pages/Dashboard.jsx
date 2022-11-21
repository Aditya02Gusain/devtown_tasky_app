import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { listId } = useParams();

  console.log("Page No: ", listId);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
