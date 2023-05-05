import { useEffect, useState } from "react";

export default function MainPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/records", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => setRecords(json.data));
    } catch (error) {
      console.log(error);
    }
  }, []);


const deleteRecord = (event) => {
    event.preventDefault();
    const id = event.target.id;
    try {
        fetch(`/api/records?id=${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(json => {
                    setRecords(records.filter(record => record._id !== id));
            });
    }
    catch (error) {
        console.log(error);
    }
}
return (
  <section className={"bg-white"}>
    <div className={"container px-6 py-10 mx-auto"}>
      <h1
        className={
          "w-[500px] mx-auto text-center text-6xl font-bold text-indigo-700"
        }
      >
        Flower shop
      </h1>
      <p
        className={"w-[1000px] mx-auto text-center mt-5 text-3xl text-pink-500"}
      >
        Welcome in our flower shop!
      </p>
      <div className={"grid grid-cols-4 gap-4"}>
        {records.map((record) => (
          <div
            key={record.id}
            className={
              "block max-w-sm mt-10 p-5 bg-white border border-pink-200 rounded-lg shadow"
            }
          >
            <h3 className={"font-bold text-blue-600 "}>{record.titlu}</h3>
            <p className={"font-normal text-pink-600"}>{record.nume_floare}</p>
            <p className={"font-normal text-violet-600"}>{record.pret}</p>
            <img
              class="h-auto max-w-full"
              src={record.image}
              alt="image description"
            ></img>
            <button
              type="button"
              onClick={deleteRecord}
              id={record._id}
              className="  mb-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
        }
