"use client";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TableUsers from "../../../../components/sections/table-users/TableUsers";
import fetchUsers, { deleteUser, searchUsers } from "../../../utils/api";
import Loading from "@/components/ui/loading/Loading";

const ITEMS_PER_PAGE = 5; // عدد العناصر في كل صفحة

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // الصفحة الحالية
  const [message, setMessage] = useState(null);

  // FETCH USERS
  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.log("Error fetching users", err);
      }
    }
    getUsers();
  }, []);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }
    try {
      const data = await searchUsers(value);
      setSearchResults(data.users || []);
      setCurrentPage(0); // العودة للصفحة الأولى
    } catch (err) {
      console.error("Error fetching search data:", err);
    }
  };

  const handelDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setMessage("User has been deleted successfully!");
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      console.log("Error deleting user:", err);
      setMessage("Failed to delete the user. Please try again.");
    }
  };

  const dataToDisplay = searchTerm.trim()
    ? searchResults
    : users;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedUsers = dataToDisplay.slice(startIndex, endIndex);

  return (
    <section className="p-6 rounded-md">
      <h1 className="text-2xl font-bold text-primary mb-4">Search Users</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type a name, email, or keyword..."
        className="w-full p-2 border rounded-md"
      />
      <div className="mt-4 overflow-x-auto">
        {message && (
          <div className="bg-delete text-white px-4 py-2 rounded-md fixed top-20">
            {message}
          </div>
        )}
        <table className="w-full rounded-md bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-secondary text-sm sm:text-base">
                NAME
              </th>
              <th className="px-4 py-2 text-left text-secondary text-sm sm:text-base">
                ROLE
              </th>
              <th className="px-4 py-2 text-left text-secondary text-sm sm:text-base">
                STATUS
              </th>
              <th className="px-4 py-2 text-center text-secondary text-sm sm:text-base">
                ACTIONS
              </th>
            </tr>
          </thead>
            {displayedUsers.map((item) => (
              <TableUsers
                key={item.id}
                image={item.image}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                role={item.role}
                gender={item.gender}
                id={item.id}
                deleted={handelDelete}
              />
            ))}
        </table>
        {displayedUsers.length === 0 && (
          <p className="text-gray-500 mt-2"><Loading /></p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(dataToDisplay.length / ITEMS_PER_PAGE)}
          onPageChange={(selected) => setCurrentPage(selected.selected)}
          containerClassName="flex gap-2"
          previousClassName="px-4 py-2 bg-gray-300 rounded-md"
          nextClassName="px-4 py-2 bg-gray-300 rounded-md"
          pageClassName="px-4 py-2 bg-gray-100 rounded-md"
          activeClassName="bg-primary text-white"
        />
      </div>
    </section>
  );
};

export default SearchPage;
