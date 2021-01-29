<template>
  <div>
    <h1>Employees</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Title</td>
          <td>Year Of Experience</td>
          <td>Telephone</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.title }}</td>
          <td>{{ employee.yearsOfExp }}</td>
          <td>{{ employee.telephone }}</td>
          <td>
            <router-link
              :to="{ name: 'Update', params: { id: employee.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteEmployee(employee.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import employeeService from '../services/EmployeeService';
export default {
  data() {
    return {
      employees: [],
    };
  },

  created: function () {
    this.fetchEmployees();
  },

  methods: {
    fetchEmployees() {
      employeeService.getAll().then((response) => {
        this.employees = response.data;
      });
    },
    deleteEmployee(id) {
      employeeService.delete(id)
        .then(() => this.fetchEmployees());
    },
  },
};
</script>