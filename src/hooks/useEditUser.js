import { useState } from "react"

export const useEditUser = (url) => {
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(false);

  const editUser = async (user) => {
    const createUserApi = "http://localhost:3002/users";
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(createUserApi, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Form submission failed!');
      }

      return true; // Successful submission
    } catch (err) {
      setError(err.message);
      return false; // Failed submission
    } finally {
      setLoading(false);
    }
  };

  return { editUser, load, error };
}