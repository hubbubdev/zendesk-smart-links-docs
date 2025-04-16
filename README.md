# Smart Links (Zendesk App)

Give your agents easy access to external tools through the Smart Links application for the Zendesk agent workspace to increase their efficiency and effectiveness.

You can leverage Zendesk data about the current ticket, user, customer, or from custom fields to formulate dynamic URLs, making it seamless for agents to get where they need to go.

![screenshot-0](https://github.com/user-attachments/assets/3ad685af-dbec-43d8-b950-b6b96b0375f2)
![screenshot 1](https://github.com/user-attachments/assets/7514e320-eb67-48ee-9690-97bbdb2be13e)
![screenshot 2](https://github.com/user-attachments/assets/e4ec80ec-0b77-4edd-ae35-bb1df03f6118)

## Getting Started

Navigate to the Admin panel via the lefthand sidebar (only accessible to users with the `admin` role).

![image](https://github.com/user-attachments/assets/df1a9ba4-8294-4841-82f8-fc60a429b0fe)

Click **Add Link** and enter a label for the link (that will be shown to your agents)

When entering the URL, you can specify variables from the Zendesk instance using double curly braces such as `{{ticket.id}}` 

The **Insert Variable** button will also help you easily add common variables that you might want to use, however you are not limited to this list.

![image](https://github.com/user-attachments/assets/180e7fa9-c6f8-420c-9714-784b71badd63)

To use variables not listed, the [Zendesk API Reference > Ticket Sidebar](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticket-object) can help you determine how to reference a field via Zendesk's dot notation (eg. `ticket.assignee.user.email`)

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

## Referencing Custom Fields

To reference the value of a custom field in a Smart Link, we will enter our template string in this syntax:
`{{ticket.customField:custom_field_<field_id>}}`

To determine the `field_id` to use, you'll need to navigate to the **Zendesk Admin Center > Objects and rules > Tickets > Fields**

Here you can view and create new fields. To reference them via a Smart Link, copy the value of the `Field ID` column, and we'll use that in our smart link like so: `{{ticket.customField:custom_field_35588134477723}}`

![image](https://github.com/user-attachments/assets/1ff26ecc-eee3-4160-bc1f-97986929ac03)

## Pricing

Get started for Free with 2 dynamic links! Unlock unlimited links with our paid plan

Navigate to **Admin Center > Apps and integrations > Zendesk Support Apps**

Click the cog icon and **Change settings**

<img width="288" alt="Smart Link app settings" src="https://github.com/user-attachments/assets/aaa3932a-9cba-4939-ac7f-e79b3548cb76" />

Select the Pro plan, and enter your billing details


