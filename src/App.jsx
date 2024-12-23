import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [favorite, setFavorite] = useState(false);

  const [addContact, setAddContact] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newArr = [...addContact, { name, company, phone, favorite }];
    setAddContact(newArr);

    setName("");
    setCompany("");
    setPhone("");
    setFavorite(false);
  };

  return (
    <div className="bg-white h-screen w-full p-10 flex">
      <div className="bg-zinc-100 h-[100%] w-[50%] rounded mr-8 p-10 drop-shadow-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h1 className="text-3xl font-semibold mb-8">Add Contact</h1>

          <label className="block text-xl font-medium mb-2" htmlFor="Name">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="text-xl border-2 border-zinc-300 w-[80%] px-4 py-2 rounded mb-5"
            type="text"
            placeholder="Enter Name"
            value={name}
          />

          <label className="block text-xl font-medium mb-2" htmlFor="Company">
            Company
          </label>
          <input
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            className="text-xl border-2 border-zinc-300 w-[80%] px-4 py-2 rounded mb-5"
            type="text"
            placeholder="Enter Company"
            value={company}
          />

          <label className="block text-xl font-medium mb-2" htmlFor="Phone">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="text-xl border-2 border-zinc-300 w-[80%] px-4 py-2 rounded block"
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
          />

          <input
            onChange={(e) => {
              setFavorite(e.target.checked);
            }}
            className="h-4 w-4 mt-7 mr-3"
            type="checkbox"
            checked={favorite}
          />
          <label className="text-xl font-medium" htmlFor="Checkbox">
            Favorite
          </label>
          <br />
          <button className="text-xl bg-blue-600 text-white rounded w-[80%] px-4 py-3 mt-4">
            Add Contact
          </button>
        </form>
      </div>

      <div id="box" className="bg-zinc-100 h-[100%] w-[50%] rounded p-10 drop-shadow-2xl overflow-y-auto">
      <h1 className="text-3xl font-semibold mb-8">Contact List</h1>
        {addContact.map(function (elem) {
          return (
              <div className="w-[100%] bg-zinc-200 mb-4 p-6 rounded drop-shadow-lg">
                <h1 className="text-2xl font-semibold mb-1">{elem.name}</h1>
                <p>Company: {elem.company}</p>
                <p>Phone: {elem.phone}</p>
                <p className="bg-orange-500 w-fit text-white text-base px-3 py-1 rounded mt-1">{elem.favorite ? "Favorite":""}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;