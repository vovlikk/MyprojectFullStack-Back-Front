FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

COPY MyprojectFullStack-Back-Front.sln ./
COPY MyprojectFullStack-Back-Front/*.csproj ./MyprojectFullStack-Back-Front/

RUN dotnet restore MyprojectFullStack-Back-Front.sln

COPY . .

WORKDIR /src/MyprojectFullStack-Back-Front
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 80
ENTRYPOINT ["dotnet", "MyprojectFullStack-Back-Front.dll"]
