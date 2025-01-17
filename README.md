# **Avatar Generator API**

A simple **Next.js** API to generate SVG avatars with gradient backgrounds and customizable text. The API supports various query parameters for personalization, making it easy to use in any project.

<img width="668" alt="avatar" src="https://github.com/user-attachments/assets/53d171bb-26dc-4876-87fc-b61776f8fbae">

## **Features**

-   Dynamically generated SVG avatars with gradients.
-   Customizable avatar size, text, and corner rounding.
-   Powered by Next.js with support for **Edge API Routes**.

## **Quick Starter**

### **Installation**

1. **Clone the repository:**

    ```bash
    git clone https://github.com/constantimi/avatar-generator.git
    cd avatar-generator
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    The API will be available at `http://localhost:3000/api/avatar`.

## **Usage**

### **Endpoint:**

`GET /api/avatar`

### **Query Parameters:**

| Parameter | Type   | Description                                       | Default |
| --------- | ------ | ------------------------------------------------- | ------- |
| `name`    | string | Name used for generating the gradient background. | Random  |
| `text`    | string | Text displayed in the center of the avatar.       | (none)  |
| `size`    | number | Size of the avatar in pixels.                     | `120`   |
| `rounded` | number | Corner radius for rounding the avatar in pixels.  | `0`     |

### **Examples**

1. **Simple Avatar:**

    ```bash
    http://localhost:3000/api/avatar?name=Ex
    ```

    <img width="149" alt="default" src="https://github.com/user-attachments/assets/f07e3dfc-91ec-453d-9eed-f441832b9812">

2. **Avatar with Custom Text:**

    ```bash
    http://localhost:3000/api/avatar?name=example&text=Ex
    ```

    <img width="149" alt="text" src="https://github.com/user-attachments/assets/d41330ad-8cfb-4f30-81a7-cba3c9e73af3">

3. **Custom Size and Rounded Corners:**

    ```bash
    http://localhost:3000/api/avatar?name=example&text=Ex&size=300&rounded=20
    ```

    <img width="300" alt="text" src="https://github.com/user-attachments/assets/8c5df754-a826-4904-87a6-058e41a1bcaa">

4. **Custom Encoded Hex Colors:**

    ```bash
    http://localhost:3000/api/avatar?size=500&from=%23123553&to=%2399CCFF
    ```

    Where `%23` at the beginning is the encoding of the `#` symbol for the hex color.
