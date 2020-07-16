export default {
  EventsManagement: {
    Actions: {
      'Embeded Actions': '',
      'General Actions': [],
      'Selected Item Action': [
        'Edit EventManagement',
        'Clone EventManagement',
        'Delete EventManagement',
      ],
    },
    Child: {},
    DataSource: {
      'Key Field': '',
      'Parent key field': '',
      Type: 'List',
      URL: 'Event',
    },
    General: {
      Caption: 'Events',
      Name: 'Event',
    },
    Permissions: {
      Groups: '',
    },
    UI: {
      TemplateActions: {},
      'Card View Template': 'VisitingCard0',
      Width: '50%',
      Height: '',
      TemplateHelpers: {},
      IsEditable: 'No',
      'Display Order': '',
      'Map View Template': '',
      'Calendar View Template': 'calendarEvent',
      'List View Template': '',
      'Detail View': 'tab',
      Column: '',
      'Tile View': '',
      Templates: {
        calendarEvent:
          '<style>\n    .cal-content{\n        color: white;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n     .cal-content i{\n          color: white;\n     }\n    .cal-content.Event{\n        background: green;\n    }\n    .cal-content{\n        padding: 0 2px;\n     }\n    .fc-day-grid-event{\n        padding: 0;\n        border: 0;\n    }\n</style>\n<div class="cal-content {{node.__typename}}">\n    <span class="fc-title">\n        {{title}}\n    </span>\n   <span class="cal-del-act" onClick="invokeAction(\'deleteEvent\',\'{{node.id}}\',\'{{node.__typename}}\')">\n        <i class="fa fa-trash" title="delete event"></i>\n    </span>\n</div>\n',
        EndDate: '<div>{{#if EndDate}}{{getdateTime EndDate}}{{/if}}</div>',
        StartDate:
          '<div>{{#if StartDate}}{{getdateTime StartDate}}{{/if}}</div>',
        VisitingCard0: 'EventMangment_Card_View',
        Title:
          '<div onclick="invokeAction(\'goToDetails\', this)" businessType="{{BusinessType}}" data-action="edit" data-bind="ID={{id}}" style="cursor: pointer;color: #1a73e8;"> {{Title}} </div>',
      },
      decorator: {
        Attachment: '',
        LinkedinURL: '',
      },
    },
    Views: {
      'Seat Layout': {
        Default: 'true',
        DataSource: {
          FormID: 'AddSeatMap',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Add',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Seat Layout',
        Fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 1,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
      Invite: {
        Default: 'true',
        DataSource: {
          FormID: 'InviteDetailsForm',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Edit',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Invite',
        Fields: {
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 6,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
      Invites: {
        Default: 'true',
        DataSource: {
          FormID: 'InviteHistoryDetailsForm',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Add',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Invites',
        Fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 1,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
      Past: {
        Actions: {
          'Embeded Actions': '',
          'General Actions': [],
          'Selected Item Action': [],
        },
        binding: {
          tod: 'moment.utc().format()',
        },
        Fields: {
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: 'Postal Code',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: 'State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '140px',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'EndDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: 'Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          StartDate: {
            displayOrder: 2,
            caption: 'Start Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: 'City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'created Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'Venue Name',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: 'Address Line',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        FilterRule: '{ "where":{ "and":[{"EndDate":{"lte":"@tod"}}]} }',
        'List Name': 'Event',
        QueryType: 'axios',
        Query:
          'query ($filters: JSON, $where: JSON) { Event { EventFind(filter: $filters) { edges { node { SeatReservation Privacy BusinessType EndDate ShowRemainingTickets StartDate Currency CancellationPolicy MaxNoRegistrations EventCountdown Title Timezone Tags Project MinDaysCancelling VenueName id LegalEntity Description IsOnlineEvent createdDate createdBy modifiedDate modifiedBy Images Logo Thumbnail _VenueAddress { Country PostalCode State City AddressLine id } } } } EventCount(where: $where) } }',
        Title: 'Past',
      },
      'Registration Types': {
        Default: 'true',
        DataSource: {
          FormID: 'RegistrationTypesDetailsForm',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Add',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Registration Types',
        Fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 1,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
      'Live and Draft Events': {
        Default: true,
        QueryType: 'axios',
        binding: {
          tod: 'moment.utc().format()',
        },
        Query:
          'query ($filters: JSON, $where: JSON) { Event { EventFind(filter: $filters) { edges { node { StartDate Images BusinessType Title Timezone Tags Duration VenueName id LegalEntity Status createdDate createdBy modifiedDate Logo Thumbnail _VenueAddress { Country PostalCode State City AddressLine id } } } } EventCount(where: $where) } }',
        UI: {
          'List View Template': 'Live_Draft_Event',
          Pagination: 'pagingwithpage',
        },
        FilterRule:
          '{"where":{"or":[{"and":[{"or":[{"StartDate":{"lte":"@tod"}},{"StartDate":{"gte":"@tod"}},{"StartDate":{"exists":false}}, { "StartDate": null }]},{"or":[{"StartDate":{"gte":"@tod"}},{"StartDate":{"exists":false}}, { "StartDate": null }]}]},{"Status":"Not ready"}]}}',
        Title: 'Live and Draft Events',
        Fields: {
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: '_VenueAddress.PostalCode',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: '_VenueAddress.State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '140px',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'EndDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: '_VenueAddress.Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          StartDate: {
            displayOrder: 2,
            caption: 'StartDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: '_VenueAddress.City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'VenueName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: '_VenueAddress.AddressLine',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'List',
        DefaultSort: 'createdDate DESC',
      },
      Schedule: {
        Default: 'true',
        DataSource: {
          FormID: 'SessionSlots',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Add',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Schedule',
        Fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 1,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
      'Recurring Event': {
        Fields: {
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: '_VenueAddress.PostalCode',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: '_VenueAddress.State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '140px',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'EndDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: '_VenueAddress.Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          StartDate: {
            displayOrder: 2,
            caption: 'StartDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: '_VenueAddress.City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'VenueName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: '_VenueAddress.AddressLine',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        DataSource: {
          FormID: 'AppointmentsDetailsForm',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Edit',
          Type: 'Form',
          URL: 'Event',
        },
        type: 'Form',
        QueryType: 'axios',
        Query: '',
        Visible: false,
        Title: 'Recurring Event',
      },
      'All Events': {
        DefaultSort: 'createdDate DESC',
        Fields: {
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: 'Postal Code',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '160px',
            filterEnable: true,
            hidden: false,
            editable: true,
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: 'State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '140px',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'EndDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: 'Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          StartDate: {
            displayOrder: 2,
            caption: 'Start Date',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: 'City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '160px',
          },
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'Venue',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: 'Address',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        InlineEditing: true,
        DialogEditing: true,
        Query: '',
        QueryType: 'axios',
        Title: 'All Events',
      },
      Event: {
        Fields: {
          '_VenueAddress.PostalCode': {
            displayOrder: 10,
            caption: '_VenueAddress.PostalCode',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.State': {
            displayOrder: 9,
            caption: '_VenueAddress.State',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '140px',
          },
          Privacy: {
            displayOrder: 4,
            caption: 'Privacy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          EndDate: {
            displayOrder: 3,
            caption: 'EndDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          '_VenueAddress.Country': {
            displayOrder: 11,
            caption: '_VenueAddress.Country',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          StartDate: {
            displayOrder: 2,
            caption: 'StartDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Currency: {
            displayOrder: 12,
            caption: 'Currency',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '100px',
          },
          Duration: {
            displayOrder: 9,
            caption: 'Duration',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          '_VenueAddress.City': {
            displayOrder: 8,
            caption: '_VenueAddress.City',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          createdDate: {
            displayOrder: 13,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '130px',
          },
          Title: {
            displayOrder: 1,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          Tags: {
            displayOrder: 5,
            caption: 'Tags',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '150px',
          },
          VenueName: {
            displayOrder: 6,
            caption: 'VenueName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          '_VenueAddress.AddressLine': {
            displayOrder: 7,
            caption: '_VenueAddress.AddressLine',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        DataSource: {
          FormID: 'EventDetailsForm',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Edit',
          Type: 'Form',
          URL: 'Event',
        },
        type: 'Form',
        QueryType: 'axios',
        Query: '',
        Visible: false,
        Title: 'Event',
      },
      'Not Available': {
        Default: 'true',
        DataSource: {
          FormID: 'NotAvailableSession',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Add',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Not Available',
        Fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 1,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
      Calendar: {
        calendarFields: {
          Event: {
            Description: 'Title',
            End: 'EndDate',
            Start: 'StartDate',
          },
        },
        UI: {
          'Calendar View Template': 'calendarEvent',
        },
        Fields: [
          'Title',
          'StartDate',
          'EndDate',
          'Privacy',
          'Tags',
          'VenueName',
          'Currency',
          'createdDate',
        ],
        Query:
          'query($filters: JSON,$where: JSON) {\n  Event {\n    EventFind(filter: $filters) {\n      edges {\n        node {\n          id\n          StartDate\n          EndDate\n          Title\n          Tags\n          VenueName\n          Currency\n          createdDate\n          Privacy\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    EventCount(where:$where)\n    __typename\n  }\n}\n',
        Title: 'Calendar',
        type: 'Calander',
        isFilter: false,
      },
      Integrations: {
        Default: 'true',
        DataSource: {
          FormID: 'IntegrationsDetailsForm',
          Params: {
            id: {
              type: 'string',
              mapwith: 'id',
            },
          },
          'Parent key field': '',
          'Sharepoint Action': 'Add',
          Type: 'Form',
          URL: 'Event',
        },
        Query: '',
        Visible: false,
        FilterRule: '{ "where": {} }',
        Title: 'Integrations',
        Fields: {
          Title: {
            displayOrder: 2,
            caption: 'Title',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Status: {
            displayOrder: 2,
            caption: 'Status',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          Type: {
            displayOrder: 3,
            caption: 'Type',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          TemplateName: {
            displayOrder: 4,
            caption: 'TemplateName',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdBy: {
            displayOrder: 5,
            caption: 'createdBy',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
          createdDate: {
            displayOrder: 1,
            caption: 'createdDate',
            searchEnable: true,
            sortEnable: true,
            columnWidth: '180px',
          },
        },
        type: 'Form',
        DefaultSort: 'createdDate DESC',
      },
    },
  },
}
