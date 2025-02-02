**Data Ingestion**
- Ingest Minimum 50k-70k data. 
- Send this data in diffent time interval from send_logs.py - time.sleep(1) line.
- Suppose first ingest time.sleep(15) for 2 hours then ingest time.sleep(9) for 2 hours
- Then ingest time.sleep(1) for 1 hour then again ingest time.sleep(15) for 2 hours.
- In this way ingest 50k-70k data.

**Data View Setup**
- From Stack Management --> Data views, Create data view using netowrk_logs index.
- Now the logs can be showed from Discover

**Enable Machine Learning**
- Start 30 days free trial license.
- Go to Stack Management --> License management --> Enable Machine Learning.
- Under Analytics --> Machine Learning --> Job, Create new Job
- Select the data view created above.
- Select Multi-Metrics --> Click Use full data --> Click Next
- Select High Sum(log.level.num)
- Select Split Field cisco.hostname.keyword or log.level.keyword. It will show seperately based on that.
- Select Influencer cisco.hostname.keyword and log.level.keyword both
- Click Next
- Provide Job ID. It will be any name like high_sum_log_level_num.
- Click Next and Create Job
- After creation then click "Start job running in real time"
- After that click "View Results"
- Now you can see the results of the job. Click Overall to see in graph.

**Kibana Email Alerting**
- From Stack Management --> Connectors --> Create Connectors
- Select Email --> Provide Name --> Sender Email ID --> Service: Gmail
- Username: Your Gmail Email ID
- Password: Your Gmail Email ID App Password not the actual password
- Click Save and test and check the inbox that you have provided.

**Machine Learning Email Alerting**
- From Stack Management --> Rules
- Create Rules --> Anomaly detection
- Select the job created above.
- Select Record
- Provide the serverity 10-20 for testing
- Check the rule condition with an interval: Provide 2d
- And test any anomaly detected or not if no then increase the time like 3d, 4d etc
- Rule schedule: Provide the frequency after how much time you want email alert
- Select Action as Gmail
- Provide the email id where you want to send the alert and subject
- Replace the mail body with mail_body.txt file
- Provide Rule Name and Create Rule.

**Create Normal Kibana Query Rules**
- From Observability --> Alerts
- Click Manage Rules
- Click create rules --> Search Elasticsearch query and select Elasticsearch query
- Provide Name anything
- Select a query type: KQL or Lucene
- Select data view if needed
- Provide kibana query like - log.level.keyword : "critical"
- Select the time: for the last time as needed
- Click test query and check if it is working or not
- Select Run Schedule and provide the time frequency after how much time you want email alert
- Select Actions --> Gmail --> Select For Each Alert: On Check Interval and Run When: Query Matched
- Provide the email id where you want to send the alert and subject
- Use Default Email body in there.
- Click Save.
