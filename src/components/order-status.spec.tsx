import { OrderStatus } from "./order-status"
import { render } from '@testing-library/react'

it('should display the right text when order status is pending',()=>{
  
  const wrapper = render(<OrderStatus status="pending"/>)

  const  statusText = wrapper.getByText('Pendente')
  const badgeElement = wrapper.getByTestId('badge')

  expect(statusText).toBeInTheDocument()
  expect(badgeElement).toHaveClass('bg-slate-500')



})

it('should display the right text when order status is canceled',()=>{
  
  const wrapper = render(<OrderStatus status="canceled"/>)

  const statusText = wrapper.getByText('Cancelado')
  const badgeElement = wrapper.getByTestId('badge')

  expect(statusText).toBeInTheDocument()
  expect(badgeElement).toHaveClass('bg-rose-500')
})

