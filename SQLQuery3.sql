CREATE TABLE [dbo].[Words] (
    [words] VARCHAR (MAX) NOT NULL
);


BULK INSERT dbo.Words 
FROM 'C:\Users\Nick\Documents\words.csv'
WITH 
(
	FORMAT = 'CSV',
	ROWTERMINATOR = '\n'
)