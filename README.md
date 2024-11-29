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

2. **Avatar with Custom Text:**

    ```bash
    http://localhost:3000/api/avatar?name=example&text=Ex
    ```

3. **Custom Size and Rounded Corners:**
    ```bash
    http://localhost:3000/api/avatar?name=example&text=Ex&size=300&rounded=20
    ```

## **Contributing**

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
