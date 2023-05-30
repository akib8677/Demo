import axios from "axios";

const url = "http://localhost:8000";

async function createGoal(goalData, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
    const res = await axios.post(`${url}/api/goal`, goalData, config);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function getGoals(token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
    const res = await axios.get(`${url}/api/goals`, config);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function deleteGoal(id, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
    const res = await axios.post(`${url}/api/goal/:${id}`, config);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const goalService = {
  createGoal,
  deleteGoal,
  getGoals
}