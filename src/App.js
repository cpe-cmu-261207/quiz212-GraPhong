function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  const namePerson = persons.map((persons) => persons.name);

  return (
    <div class="ml-2">
      {/* Code me please! */}

      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>620610797</p>
        <button oneclick={() => this.updateEquation()}>-</button>
        <button oneclick={() => this.clearEquation("620610797")}>reset</button>
        <button oneclick={() => this.updateEquation()}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Phongsathon Noinach 620610797</td>
            <td>male</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
