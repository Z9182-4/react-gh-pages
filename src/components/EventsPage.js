import React from 'react';
import EventDetail from './EventDetail';
import '../css/Events.css'; 

function EventsPage() {
  return (
    <div>
      <EventDetail title="Event 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." imageUrl="sample1.jpg" />
      <EventDetail title="Event 2" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." imageUrl="sample2.jpg" />
      <EventDetail title="Event 3" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. " imageUrl="sample3.jpg" />
      <EventDetail title="Event 4" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus." imageUrl="sample4.jpg" />
    
      <div className="past-events-container">
        <div className="past-events-title">Past Events</div>
        <div className="past-events-grid">
          <div className="past-event-card">
            <div>Past Event 1</div>
            <p>Description for Past Event 1</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Past Event 2</div>
            <p>Description for Past Event 2</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Past Event 3</div>
            <p>Description for Past Event 3</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Past Event 4</div>
            <p>Description for Past Event 4</p>
            <a href="#">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
