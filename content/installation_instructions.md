Navigate to the Admin panel via the lefthand sidebar (only accessible to users with the `admin` role).

![image](https://github.com/user-attachments/assets/df1a9ba4-8294-4841-82f8-fc60a429b0fe)

Click **Add Link** and enter a label for the link (that will be shown to your agents)

When entering the URL, you can specify variables from the Zendesk instance using double curly braces such as `{{ticket.id}}`

Here are some examples for how you might want to leverage this:

`https://stripe.com/customers/{{ticket.requester.externalId}}`

`https://nice.com/schedule/{{currentUser.email}}`

`https://salesforce.com/contacts?q={{ticket.requester.email}}`

The **Insert Variable** button will also help you easily add common variables that you might want to use, however you are not limited to this list.

![image](https://github.com/user-attachments/assets/180e7fa9-c6f8-420c-9714-784b71badd63)

To use variables not listed, the [Zendesk API Reference > Ticket Sidebar](https://developer.zendesk.com/api-reference/apps/apps-support-api/ticket_sidebar/#ticket-object) can help you determine how to reference a field via Zendesk's dot notation (eg. `ticket.assignee.user.email`)

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
