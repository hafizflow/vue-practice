export default {
    template: `
        <div class="flex gap-2">
            <button 
                v-for="tag in tags" 
                class="px-1 py-px border rounded text-xs"
                :class="{'border-blue-500 text-blue-500': currentTag === tag}"
                @click="$emit('update:currentTag', tag)"
                >{{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }

}