import styled from "styled-components";
import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/solid'

export const DisclosureContainer = styled(Disclosure)`
margin: 0.2rem;
height: 72.5px;
width: auto;



`
export const DisclosureButton = styled(Disclosure.Button)`
width: 100%;
height: 30px;
background-color: #303030;
color: #ffffff;
font-size: 1.625rem;
display: block;


`
interface IconProps {
  open: boolean;
}
export const Icon = styled(PlusIcon) <IconProps>`
size: 30px;
${({ open }) => open ? 'transform: rotate(45deg)' : null}

`
export const DisclosurePanel = styled(Disclosure.Panel)`
width: 100%;
background: #303030;
color: #ffffff;
font-size: 1.625rem;
`