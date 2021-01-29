<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateEmployee">
          <div class="form-group">
            <label>First Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.firstName"
            />
          </div>
          <div class="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.lastName"
            />
          </div>
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="employee.title" />
          </div>
          <div class="form-group">
            <label>Years Of Experience:</label>
            <input
              type="number"
              class="form-control"
              v-model="employee.yearsOfExp"
            />
          </div>
          <div class="form-group">
            <label>Telephone:</label>
            <input
              type="text"
              class="form-control"
              v-model="employee.telephone"
            />
          </div>
          <div class="form-group">
            <input
              type="submit"
              class="btn btn-primary"
              value="Update Employee"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import employeeService from "../services/EmployeeService";
export default {
  data() {
    return {
      employee: {},
    };
  },

  created: function () {
    this.getEmployee();
  },

  methods: {
    getEmployee() {
        employeeService.get(this.$route.params.id)
            .then((respose) => this.employee = respose.data)
    },

    updateEmployee() {
        employeeService.update(this.$route.params.id, this.employee)
            .then(() => this.$router.push({ name: "Index" }))
    },
  },
};
</script>