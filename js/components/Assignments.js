import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
        <section class="flex gap-8">
            
          <assignment-list :assignments="filters.inProgress" title="In Progress">
            <assignment-create @add="add"></assignment-create>
          </assignment-list>
              
            
          
            <div v-if="showCompleted">
              <assignment-list
                  @toggle="showCompleted =! showCompleted"
                  :assignments="filters.completed"
                  title="Completed"
                  can-toggle>
              </assignment-list>
            </div>
        </section>

        
    `,

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },


    data() {
        return {
            assignments: [],
            showCompleted: true,
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },

    methods: {
        add(title) {
            this.assignments.push({
                name: title,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}