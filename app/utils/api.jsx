// GET ALL USERS
export default async function fetchUsers() {
  try {
    const res = await fetch('https://dummyjson.com/users');
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status}`);
    }
    const data = await res.json();
    return data.users; // استخراج المستخدمين فقط
  } catch (error) {
    console.error("Error fetching users data:", error);
    throw error;
  }
}

// GET SINGLE USER
export async function fetchUser(id) {
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching single user data:", error);
    throw error;
  }
}

// DELTEL USER

export async function deleteUser(userId) {
  try {
    const res = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error(`Failed to delete user: ${res.status}`);
    }

    const data = await res.json();
    console.log("Deleted user:", data);
    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
// SEARCH USER

export async function searchUsers(searchId) {
  try {
    const res = await fetch(`https://dummyjson.com/users/search?q=${searchId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching single user data:", error);
    throw error;
  }
}
