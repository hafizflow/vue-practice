export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 flex">
                <input v-model="newAssignment" class="p-2 text-black" placeholder="New Assignment....."/>
                <button type="submit" class="bg-white text-black border-l p-2">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}