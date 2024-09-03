import { useEffect, useState } from "react";

function SubscribersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("fullname");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;
  const [confirmDeleteIds, setConfirmDeleteIds] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users
    .filter((user) =>
      user[searchCategory].toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (userId) => {
    setConfirmDeleteIds([...confirmDeleteIds, userId]);
  };

  const confirmDelete = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/admin/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("User deleted successfully");
        setUsers(users.filter((user) => user.user_id !== userId));
      } if (response.status === 400) {
        throw new Error("Invalid role. Only 'teacher' or 'student' can be deleted");
      }
      else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
    setConfirmDeleteIds(confirmDeleteIds.filter((id) => id !== userId)); // Reset confirmDeleteId after deletion
  };


  const cancelDelete = (userId) => {
    setConfirmDeleteIds(confirmDeleteIds.filter((id) => id !== userId)); // Remove the canceled user ID
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSelectChange = (event) => {
    setSearchCategory(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      <div className="bg-gray-100 py-3" style={{
        marginBottom: "30px",
        marginTop: "10px",
        width: "1231px",
      }}>
        <div className="bg-gray-200 py-3 mb-5" >
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-3 ">

            List of All Subscribers
            <hr
              class="border-t-2 border-red-700  mb-1 py-1"
              style={{ width: "15%", margin: "15px auto" }}
            />
          </h2>
        </div>

        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <select style={{marginBottom: "10px" }} value={searchCategory} onChange={handleSelectChange}>
          <option value="">Select</option>
            <option value="fullname">Name</option>
            <option value="role">Role</option>
          </select>
          <input style={{marginBottom: "10px" }}
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={handleSearch}
          />

          <p>Items found: {currentUsers.length}</p>
        </div>

        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                FULLNAME
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                AGE (Yrs)
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                GENDER
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>ROLE</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.fullname}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.age}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.gender}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.role}
                </td>

                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                  {confirmDeleteIds.includes(user.id) && (
                    <>
                      <button onClick={() => confirmDelete(user.id)}>
                        Confirm
                      </button>
                      <button onClick={() => cancelDelete(user.id)}>Cancel</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "center" , marginTop: "20px"}}>
          <h3 className="px-2">Page </h3>
          {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(
            (number) => (
              <button className="px-1" key={number} onClick={() => paginate(number + 1)}>
                {number + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SubscribersList;
