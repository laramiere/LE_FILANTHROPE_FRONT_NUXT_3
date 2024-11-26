import type { Meta, StoryObj } from '@storybook/vue3'
import VButton from './VButton.vue'

const meta: Meta<typeof VButton> = {
  title: 'VButton',
  component: VButton,
}
export default meta

type Story = StoryObj<typeof VButton>

export const PrimaryButton: Story = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: '<VButton v-bind="args" />',
  }),
  args: {
    // Ajoutez ici les props par défaut pour votre bouton
    label: 'Primary Button',
  },
}
