import React from 'react';

function About() {
  return (
    <html>
      <head>
        <title>About our to-do list app</title>
      </head>
      <body>
        <div style={{ margin: '0 auto', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '36px' }}>
            <b>About our to-do list app</b>
          </h2>
          <br />
          <p>
            Welcome to our to-do list app! Our mission is to help you stay organized and productive by providing a simple and intuitive platform for managing your daily tasks.
          </p>

          <p>
            Our app is designed with the user in mind, and we are constantly working to improve its functionality and features.
          </p>

          <ol>
            <li>
                <br></br>
              <h3 style={{ fontSize: '25px' }}><b>Key features of our to-do list app include:</b></h3>
              <br></br>
              <ul>
                <li>Creating and categorizing tasks</li>
                <li>Setting due dates and reminders</li>
                <li>Tracking progress on your to-do list</li>
                <li>Customizing the app to suit your preferences, such as setting different themes or creating recurring tasks</li>
              </ul>
            </li>
          </ol>

          <p>
            To get started, simply create an account and start adding tasks to your list. You can access your to-do list from any device, so you can stay on top of your tasks no matter where you are. If you need any help or have feedback, please don't hesitate to reach out to our support team.
          </p>

          <p>
            We are a small team of developers passionate about creating tools to help people be more productive and organized. We are constantly working to improve our app and add new features, so stay tuned for updates and improvements.
          </p>

          <p>
            Thank you for choosing our to-do list app to help you stay on track and achieve your goals!
          </p>

          <br />
          <p style={{ marginTop: '50px', textAlign: 'center' }}>
            <small>Our app name and logo are trademarks of Farman Inc.</small>
          </p>
        </div>
      </body>
    </html>
  );
}

export default About;
