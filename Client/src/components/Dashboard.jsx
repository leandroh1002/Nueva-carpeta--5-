import axios from 'axios';
import React, { useEffect, useState } from 'react';

const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function Dashboard() {
  const [data, setData] = useState([]);
  const [selectedPublish, setSelectedPublish] = useState(null);

  useEffect(() => {
    onSubmit();
  }, []);

  const onSubmit = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/publishes/all`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const selected = data.find(item => item.idPublish === selectedId);
    setSelectedPublish(selected);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select
          name="publish"
          id="publish"
          onChange={handleSelectChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a publish</option>
          {data.map((item) => (
            <option key={item.idPublish} value={item.idPublish}>
              {item.namePublish}
            </option>
          ))}
        </select>
      </div>

      {selectedPublish && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nombre y Apellido
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  About Me
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Carrera
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Año que cursa
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  cv
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Visto
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {selectedPublish.People.map((person, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {person.fullName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{person.aboutMe}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {person.Carrers && person.Carrers.length > 0
                        ? person.Carrers.map((carrer) => carrer.name).join(', ')
                        : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {person.yearsOfCarrer}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                     <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Descargar</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
