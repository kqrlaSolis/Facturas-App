
export const InvoiceDetail = () => {

    return (
      <div className="overflow-x-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-start border-b pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold">Invoice # {}</h2>
          </div>
          <div className="text-gray-500 text-sm">
            <p>Date: <span className="font-medium">05/07/2025</span></p>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-8 text-sm text-gray-600 mb-6">
          <div className="pl-6">
            <h3 className="text-lg font-semibold text-gray-800">Invoice to:</h3>
            <p><span className="font-semibold">Client Name</span></p>
            <p><span className="font-semibold">RFC: </span>ASDK836854K23</p>
            <p className="text-blue-600">name@company.com</p>
            <p className="text-blue-600">6631980317</p>

          </div>
        </div>
  
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Nombre del Producto</th>
                <th scope="col" className="px-6 py-3">Cantidad</th>
                <th scope="col" className="px-6 py-3">Precio Unitario</th>
                <th scope="col" className="px-6 py-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Flowbite Developer Edition", desc: "HTML, Figma, JS", qty: 2, price: 269, discount: "50%", total: 269 },
                { name: "Flowbite Designer Edition", desc: "Figma Design System", qty: 3, price: 149, discount: "0%", total: 447 },
                { name: "Flowbite Open Source", desc: "Open source components", qty: 1, price: 0, discount: "0%", total: 0 },
                { name: "2 Years Support", desc: "Premium support", qty: 1, price: 199, discount: "0%", total: 199 },
                { name: "Flowbite Developer (Team License)", desc: "HTML, Figma, JS", qty: 2, price: 799, discount: "0%", total: 1598 },
              ].map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <td className="px-6 py-4">
                    <span className="font-medium">{item.name}</span>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </td>
                  <td className="px-6 py-4">{item.qty}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4">{item.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="mt-6 text-right">
          <h3 className="text-lg font-semibold">Resumen de Orden</h3>
          <p className="text-gray-700">Subtotal: <span className="font-medium">$2,513</span></p>
          <p className="text-xl font-bold mt-2">Pagado: <span className="text-blue-600">$0,00</span></p>
          <p className="text-xl font-bold mt-2">Total: <span className="text-blue-600">$2,764.30</span></p>

        </div>
      </div>
    );
  }
  