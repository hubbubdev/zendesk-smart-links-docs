Give your agents easy access to external tools through the Smart Links application for the Zendesk agent workspace to increase their efficiency and effectiveness.

You can leverage Zendesk data about the current ticket, user, customer, or from custom fields to formulate dynamic URLs, making it seamless for agents to get where they need to go.

![image](https://github.com/user-attachments/assets/180e7fa9-c6f8-420c-9714-784b71badd63)

## Example Variables

You can use the following variables in your link templates:

- **Ticket ID**  
  `{{ticket.id}}`  
  _ID of the active ticket_

- **Current User ID**  
  `{{currentUser.id}}`  
  _ID of the current user (agent)_

- **Current User Email**  
  `{{currentUser.email}}`  
  _Email address of the current user (agent)_

- **Requester ID**  
  `{{ticket.requester.id}}`  
  _ID of the ticket requester (end-user)_

- **Requester External ID**  
  `{{ticket.requester.externalId}}`  
  _Externally-mapped ID of the ticket requester (end-user)_

- **Requester Email**  
  `{{ticket.requester.email}}`  
  _Email address of the requester_

- **Assignee ID**  
  `{{ticket.assignee.user.id}}`  
  _ID of the agent assigned to the active ticket_

- **Assignee Email**  
  `{{ticket.assignee.user.email}}`  
  _Email address of the agent assigned to the active ticket_

- **Brand ID**  
  `{{ticket.brand.id}}`  
  _ID of the brand associated with the ticket_

However, you can reference any data available to the Zendesk Application Framework in the Ticket Sidebar location. For more details, see the [Zendesk API Reference](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/)

## Referencing Custom Fields

To reference the value of a custom field in a Smart Link, we will enter our template string in this syntax:
`{{ticket.customField:custom_field_<field_id>}}`

To determine the `field_id` to use, you'll need to navigate to the **Zendesk Admin Center > Objects and rules > Tickets > Fields**

Here you can view and create new fields. To reference them via a Smart Link, copy the value of the `Field ID` column, and we'll use that in our smart link like so: `{{ticket.customField:custom_field_35588134477723}}`

![image](https://github.com/user-attachments/assets/1ff26ecc-eee3-4160-bc1f-97986929ac03)

## Pricing

Get started for Free with 2 dynamic links! Unlock unlimited links with our paid plan
