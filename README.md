# Blazor DataGrid - Change Orientation of Header Text

## Overview

This sample demonstrates how to change the orientation of column header text in the Syncfusion [Blazor DataGrid](https://www.syncfusion.com/blazor-components/blazor-datagrid) using custom CSS styles. The implementation uses a Blazor page that hosts an `SfGrid` component and applies CSS-based customization to modify the visual presentation of column headers. Rotating or displaying header text vertically helps optimize horizontal space usage, making it easier to display multiple columns within a limited viewport while maintaining readability and a clean layout.

## Key Features

- Uses the Syncfusion Blazor DataGrid (`SfGrid`) component to render tabular data.
- Demonstrates changing column header text orientation through custom CSS styling.
- Shows how DataGrid header elements can be customized without modifying the component source code.
- Helps reduce header width requirements when working with narrow columns.
- Provides a practical example of UI customization focused on DataGrid header presentation.

## Prerequisites

- Visual Studio 2022 or Visual Studio Code
- .NET SDK compatible with the project's target framework

## How to Run the Project

**Visual Studio 2022**

1. Clone or download this repository.
2. Open the solution file located in the `RotateHeaderText` project folder.
3. Restore all NuGet packages.
4. Set the `RotateHeaderText` project as the startup project if required.
5. Build the solution.
6. Run the application using `Ctrl+F5`.

**Visual Studio Code**

1. Open the repository folder in Visual Studio Code.
2. Open the integrated terminal.
3. Navigate to the project directory containing the application project file.

```bash
dotnet restore
dotnet run
```

4. Open the local application URL displayed in the terminal after the application starts.

## Project Structure

- `RotateHeaderText/RotateHeaderText/Pages/Index.razor` — contains the Syncfusion Blazor `SfGrid` implementation and the column definitions that demonstrate changing DataGrid header text orientation through custom CSS styling.

## Support and Feedback

- For general product questions, visit the [Syncfusion Community Forum](https://www.syncfusion.com/forums) or [Syncfusion Support](https://www.syncfusion.com/support).
- To report an issue specific to this sample, open a GitHub issue in this repository.
- For feature documentation, see the Syncfusion Blazor DataGrid columns documentation: https://help.syncfusion.com/grid-sdk/blazor/data-grid/column-headers#change-the-orientation-of-header-text

## License

This is a Syncfusion sample project provided to demonstrate product usage. Review the [Syncfusion license terms](https://www.syncfusion.com/sales/pricing?category=ui-components) before using Syncfusion components in your own applications.
