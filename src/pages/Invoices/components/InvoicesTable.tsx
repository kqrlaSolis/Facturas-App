import { useState } from "react";
import { invoices } from "../../../core/services/invoiceService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../../components/modal";

export const InvoicesTable = ({ onEdit }: any) => {
  const navigate = useNavigate();

  const [data, setData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleData = async () => {
    const invoiceData = await invoices();
    setData(invoiceData);
    console.log(invoiceData);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              NO. de Factura
            </th>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Saldo Pendiente
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((invoice: any, index: number) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {invoice.id}
                </th>
                <td className="px-6 py-4">{invoice.client.name}</td>
                <td className="px-6 py-4">{invoice.amount}</td>
                <td className="px-6 py-4">{invoice.status}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      onEdit(invoice);
                      navigate("/invoicedetails");
                      // invoice.details.map((item: any)=> console.log(item))
                    }}
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Detalle
                  </button>

                  <button
                    onClick={() => setIsOpen(true)}
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    Pago
                  </button>
                  <ModalComponent
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Pagar Factura"
                  >
                    {" "}
                    <form>
                      <input
                        type="text"
                        placeholder="Nombre del cliente"
                        className="border p-2 w-full"
                      />
                      <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white p-2 rounded"
                      >
                        Guardar
                      </button>
                    </form>
                  </ModalComponent>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
