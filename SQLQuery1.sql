BULK INSERT dbo.Words 
FROM 'C:\Users\Nick\Documents\words.csv'
WITH 
(
	FORMAT = 'CSV',
	ROWTERMINATOR = '\n'
)

