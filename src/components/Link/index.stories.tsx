import { FiShoppingCart } from "react-icons/fi";

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Link } from ".";
import { Provider } from "../../providers/theme";
import { BrowserRouter } from "react-router-dom";

export default {
  title: 'Link',
  component: Link
} as ComponentMeta<typeof Link>


const Template: ComponentStory<typeof Link> = (args) => (
  <Provider>
    <BrowserRouter>
      <Link {...args} />
    </BrowserRouter>
  </Provider>
)

export const Default = Template.bind({});
Default.args = {
  children: "Texto do Link",
  to: "/"
}

export const Icon = Template.bind({});
Icon.args = {
  children: <FiShoppingCart size={22} />,
  to: "/"
}
