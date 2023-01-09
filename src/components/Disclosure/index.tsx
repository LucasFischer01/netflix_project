import { DisclosureButton, DisclosureContainer, DisclosurePanel, Icon } from "./styles";

export interface DisclosureProps {
  title: string;
  content: string;
}
export const Disclosure = ({ title, content }: DisclosureProps): JSX.Element => {
  return (<DisclosureContainer>
    {({ open }) => (
      <>
        <DisclosureButton>

          {title}
          <Icon open={open} />
        </DisclosureButton>

        <DisclosurePanel>
          {content}
        </DisclosurePanel>
      </>

    )}
  </DisclosureContainer>)
}