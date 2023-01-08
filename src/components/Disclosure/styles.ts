import styled from "styled-components";
import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/solid'

export const DisclosureContainer = styled(Disclosure)`



`
export const DisclosureButton = styled(Disclosure.Button)`
background-color: antiquewhite;
width: 100%;
height: 40px;
`
interface IconProps {
  open: boolean;
}
export const Icon = styled(PlusIcon) <IconProps>`
${({ open }) => open ? 'transform: rotate(45deg)' : null}
`
export const DisclosurePanel = styled(Disclosure.Panel)`

`