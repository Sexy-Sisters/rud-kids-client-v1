import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '../button';

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'common/button',
  component: Button,
} as ComponentMeta<typeof Button>;

// 기본 포맷을 정해두고 bind로 제어
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

// 각각이 새로운 스토리들
export const RedSmall = Template.bind({});
RedSmall.args = {
  style: {
    defaultColor: 'red',
    hoverColor: 'tomato',
    width: '200px',
    height: '100px',
    round: '10px',
  },
  children: <p>앙 빨간 버튼띠</p>,
  onClick: () => console.log('앙 텍스트띠'),
};
