import { InvoicesTable } from "./components/InvoicesTable";

const Invoices: React.FC = () => {
  const handleViewDetails = (invoice: any) => {
    console.log(invoice);
  };

  return (
    <>
      <InvoicesTable onEdit={handleViewDetails}></InvoicesTable>
    </>
  );
};

export default Invoices;
