# Smart Links (Zendesk App)

Give your agents easy access to external tools through the Smart Links application for the Zendesk agent workspace.

You can leverage Zendesk data from the current ticket, user, customer, or custom fields to formulate dynamic URLs, making it seamless for agents to get where they need to go.

## Getting Started

Navigate to the

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

- **Group ID**  
  `{{ticket.assignee.group.id}}`  
  _ID of the group assigned to the ticket_

- **Brand ID**  
  `{{ticket.brand.id}}`  
  _ID of the brand associated with the ticket_

- **Form ID**  
  `{{ticket.form.id}}`  
  _ID of the ticket form used_

- **Custom Field ID (Example)**  
  `{{ticket.customField:custom_field_<field_id>}}`  
  _Value of a custom field — replace `<field_id>` with the custom field ID, e.g. `{{ticket.customField:custom_field_1234}}`_

However, you can reference any data available to the Zendesk Application Framework in the Ticket Sidebar location. For more details, see the [Zendesk API Reference](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/)

## Pricing

Get started for Free with 2 dynamic links! Unlock unlimited links with our paid plan
